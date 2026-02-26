const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    nav.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
  });
}

const copyButton = document.querySelector('#copy-button');
const templateText = document.querySelector('#template-text');

if (copyButton && templateText) {
  copyButton.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(templateText.textContent);
      copyButton.textContent = 'コピーしました';
      setTimeout(() => {
        copyButton.textContent = 'テンプレをコピー';
      }, 2000);
    } catch (error) {
      copyButton.textContent = 'コピーに失敗しました';
      setTimeout(() => {
        copyButton.textContent = 'テンプレをコピー';
      }, 2000);
    }
  });
}
