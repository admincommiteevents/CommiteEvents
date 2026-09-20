const fs = require('fs');
const path = require('path');

function walkDir(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walkDir(file));
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      results.push(file);
    }
  });
  return results;
}

const files = walkDir('./src');
let changedCount = 0;

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace text-white with !text-white only inside class strings containing bg-[var(--accent-primary)]
  let newContent = content.replace(/className=[\"'\`]?([^\"'\`>]+)[\"'\`]?/g, (match, classStr) => {
    if (classStr.includes('bg-[var(--accent-primary)]') && classStr.includes('text-white') && !classStr.includes('!text-white')) {
      let newClassStr = classStr.replace(/\btext-white\b/g, '!text-white');
      return match.replace(classStr, newClassStr);
    }
    return match;
  });
  
  // Also fix any template literals that have conditional classes e.g. ${... ? 'bg-[var(--accent-primary)] text-white' : ...}
  newContent = newContent.replace(/'bg-\[var\(--accent-primary\)\][^']*text-white[^']*'/g, (match) => {
    return match.replace(/\btext-white\b/g, '!text-white');
  });

  if (content !== newContent) {
    fs.writeFileSync(file, newContent, 'utf8');
    console.log('Updated:', file);
    changedCount++;
  }
});

console.log('Total files updated:', changedCount);
