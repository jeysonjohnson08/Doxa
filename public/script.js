document.getElementById('contactForm').addEventListener('submit', async (e) => {
  e.preventDefault(); // Prevent the default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  try {
    const response = await fetch('/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message }),
    });

    const result = await response.json();

    if (response.ok) {
      // Redirect to the Thank You page after successful submission
      window.location.href = '/thank-you';
    } else {
      // Show error message if submission fails
      document.getElementById('responseMessage').textContent = result.error || 'Failed to send message';
    }
  } catch (err) {
    console.error('Error submitting form:', err);
    document.getElementById('responseMessage').textContent = 'Failed to send message';
  }
});
