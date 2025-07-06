# Task 2 Contact Form Documentation

## Project Overview

A responsive contact form web application built with HTML, CSS, and JavaScript. The form includes client-side validation, user feedback, and a clean, modern design.

## Features

* **Responsive Design** : Adapts to different screen sizes with mobile-first approach
* **Form Validation** : Client-side validation for all required fields
* **Email Validation** : Regex pattern validation for email format
* **User Feedback** : Success and error messages with color coding
* **Clean UI** : Modern styling with hover effects and box shadows
* **Form Reset** : Automatic form clearing after successful submission

## File Structure

```
task2-contact-form/
├── index.html          # Main HTML structure
├── style.css           # Stylesheet and responsive design
└── script.js           # JavaScript functionality and validation
```

## Technical Specifications

### HTML Structure (`index.html`)

* **Document Type** : HTML5
* **Viewport** : Responsive meta tag for mobile compatibility
* **Form Elements** :
* Full Name (text input, required)
* Email Address (email input, required)
* Subject (text input, required)
* Message (textarea, required)
* Submit button
* Response message paragraph

### CSS Styling (`style.css`)

* **Reset Styles** : Universal margin/padding reset with border-box sizing
* **Typography** : Franklin Gothic Medium font family
* **Layout** : Flexbox centering with container approach
* **Form Styling** :
* Light gray background (#f0f0f0)
* Rounded corners (5px border-radius)
* Box shadow for depth
* Responsive padding and margins
* **Interactive Elements** :
* Blue submit button (#007bff) with hover effect (#0056b3)
* Consistent input styling with border and padding
* **Responsive Design** : Media query for screens under 600px width

### JavaScript Functionality (`script.js`)

* **Event Handling** : Form submission preventDefault to avoid page reload
* **Validation Logic** :
* Checks for empty fields using trim() method
* Email format validation using regex pattern: `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
* Real-time user feedback with color-coded messages
* **Form Management** : Automatic form reset after successful submission

## Form Fields

| Field         | Type     | Validation         | Required |
| ------------- | -------- | ------------------ | -------- |
| Full Name     | text     | Non-empty          | Yes      |
| Email Address | email    | Format + Non-empty | Yes      |
| Subject       | text     | Non-empty          | Yes      |
| Message       | textarea | Non-empty          | Yes      |

## Validation Rules

1. **Required Fields** : All fields must be filled out
2. **Email Format** : Must follow standard email pattern (user@domain.extension)
3. **Whitespace Handling** : Leading and trailing spaces are trimmed
4. **Error Messages** :

* "Please fill in all fields." (red text)
* "Please enter a valid email address." (red text)

1. **Success Message** : "Thank you for your message!" (green text)

## Responsive Breakpoints

* **Desktop** : Full padding and spacing
* **Mobile (≤600px)** : Reduced padding (16px) for better mobile experience

## Browser Compatibility

* Modern browsers supporting ES6+ features
* HTML5 form validation
* CSS3 flexbox and media queries
* JavaScript addEventListener and regex support

## Usage Instructions

1. **Setup** : Place all three files in the same directory
2. **Launch** : Open `index.html` in a web browser
3. **Testing** : Fill out the form to test validation and submission
4. **Customization** : Modify CSS variables and styling as needed

## Customization Options

### Color Scheme

* Primary button color: `#007bff`
* Hover state: `#0056b3`
* Background: `#f0f0f0`
* Error messages: `red`
* Success messages: `green`

### Typography

* Font family: Franklin Gothic Medium (with fallbacks)
* Input padding: 10px
* Form padding: 20px (desktop), 16px (mobile)

### Validation

* Email regex pattern can be modified in `script.js`
* Additional validation rules can be added to the validation function
* Custom error messages can be implemented

## Future Enhancements

* Server-side form processing
* Additional field types (phone, date, etc.)
* Advanced validation (password strength, etc.)
* Accessibility improvements (ARIA labels, focus management)
* Animation transitions for smoother user experience
* Form data persistence (localStorage)
* Multi-language support

## Testing Checklist

* [ ] All required fields show error when empty
* [ ] Invalid email formats are rejected
* [ ] Valid form submission shows success message
* [ ] Form resets after successful submission
* [ ] Responsive design works on mobile devices
* [ ] Hover effects work on desktop
* [ ] Error messages are clearly visible
* [ ] All fields are properly labeled

## Author

**Usman Khan**

LinkedIn: [www.linkedin.com/in/usman-khan55](https://www.linkedin.com/in/usman-khan55)

## License

This project is open source and available under standard web development practices.
