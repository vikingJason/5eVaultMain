---
title: Test Animations
---

## Anime.js Test

<div id="test-animation"></div>

<script>
// This will run after page load
document.addEventListener('DOMContentLoaded', function() {
  const testDiv = document.getElementById('test-animation');
  testDiv.innerHTML = '<div style="width: 100px; height: 100px; background: var(--heading1); border-radius: 8px;"></div>';
  
  if (typeof anime !== 'undefined') {
    anime({
      targets: testDiv.firstChild,
      translateX: 250,
      rotate: '1turn',
      duration: 1000,
      loop: true,
      direction: 'alternate'
    });
    testDiv.innerHTML += '<p style="color: var(--heading1);">✅ anime.js is working!</p>';
  } else {
    testDiv.innerHTML += '<p style="color: red;">❌ anime.js not loaded</p>';
  }
});
</script>