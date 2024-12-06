# WebUSB Apple Toolkit (WAT-JS)

An intuitive, browser-based JavaScript library for seamless interaction with Apple mobile devices using WebUSB technology.

---

## Features

- **Easy Integration**: Plug-and-play library for web-based Apple device communication.
- **WebUSB Support**: Leverages WebUSB for reliable and secure connections.
- **Cross-Browser Compatibility**: Works on all modern browsers that support WebUSB.
- **Lightweight & Fast**: Optimized for performance and minimal footprint.

---

## Installation

Install the library via npm:

```bash
npm install wat-js
```

Or include it directly via a CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/wat-js"></script>
```

---

## Quick Start

Here’s how you can get started with **WAT-JS**:

### Importing the Library

If using a module bundler:

```javascript
import WebMux from 'wat-js';
```

Or, if included via a `<script>` tag:

```javascript
const WebMux = window.WebMux;
```

### Example Usage

Connect to an Apple device and retrieve basic information:

```javascript
(async () => {
    const device = await WebMux.connect();
    if (device) {
        console.log('Connected to:', device.name);
        const info = await device.getDeviceInfo();
        console.log('Device Info:', info);
    } else {
        console.log('No device connected.');
    }
})();
```

---

## API Overview

### `WebMux.connect()`
Connect to an Apple device via WebUSB.

**Returns:** A `Device` object or `null` if no device is found.

---

### `Device.getDeviceInfo()`
Retrieve detailed information about the connected device.

**Returns:** An object with device details (e.g., model, serial number).

---

## Browser Compatibility

| Browser         | Supported | Notes                   |
|------------------|-----------|-------------------------|
| Chrome           | ✅         | Full WebUSB support     |
| Edge             | ✅         | Full WebUSB support     |
| Firefox          | ❌         | No WebUSB support       |
| Safari           | ✅         | Requires enabling WebUSB |
| Opera            | ✅         | Full WebUSB support     |

---

## Contributing

Contributions are welcome! To get started:

1. Fork the repository.
2. Clone your forked repo locally.
3. Create a new branch for your feature or bug fix.
4. Submit a pull request with a clear description of your changes.

---

## License

Copyright 2024 Bell Cyber Security LLC.

---

## Acknowledgements

Special thanks to the WebUSB community for paving the way for device-browser interactions.

---

## Contact

For any issues or inquiries, reach out to us:

- **Email**: support@bellcybersecurity.com
- **GitHub Issues**: [Submit an Issue](https://github.com/0x06060606/wat-js/issues)
```