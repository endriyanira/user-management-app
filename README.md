# User Management App

A ReactJS application that displays a table with user data and a form to add new user data.

## Features

- Displays a table with columns for:
  - Nama (name)
  - Alamat (address)
  - Jenis Kelamin (gender)
  - Tanggal Lahir (date of birth, format: DD MM YYYY)
  - Tanggal Input (input date, format: DD MM YY HH MM SS)
  - Tombol Aksi (action buttons)
- Tombol Aksi includes:
  - Icon View: displays user details
  - Icon Update: opens form to update user data
  - Icon Delete: confirms and deletes user data
- Form to add new user data with input fields for:
  - Nama (required)
  - Alamat
  - Jenis Kelamin (radio buttons for P/W)
  - Tanggal Lahir (date picker, format: DD MM YYYY)
- Loading indicator displayed when loading data or accessing API
- Optimized use of React components
- Customizable UI design

## API

This application uses a dummy API in JSON format with JSON-SERVER.

## Getting Started

To run this application, follow these steps:

1. Clone the repository
2. Install dependencies with `npm install`
3. run `json-server --watch ./src/data/api.json --port 3030`
4. Start the application with `npm start`
5. Open `http://localhost:3000` in your web browser

## Author

Endriyani Rahayu.
