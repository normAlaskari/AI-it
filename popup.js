document.addEventListener('DOMContentLoaded', function() {
  try {
    const selectedText = window.getSelection().toString();
    if (selectedText === '') {
      throw new Error('No text is selected.');
    }

    const selectedTextContainer = document.querySelector('#selected-text');
    selectedTextContainer.textContent = selectedText;
  } catch (error) {
    const errorMessage = error.message || 'An error occurred while trying to get the selected text.';
    document.querySelector('#selected-text').textContent = errorMessage;
  }
});
