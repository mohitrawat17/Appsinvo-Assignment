import { PT_Sans, Quicksand } from "next/font/google";

const ptSans = PT_Sans({
  subsets: ["latin"], // Adjust subsets based on your needs
  weight: ["400"], // Include regular weight for PT Sans
});

const quicksand = Quicksand({
  subsets: ["latin"], // Adjust subsets based on your needs
  weight: ["600", "700"], // Specify desired weights for Quicksand
});

import "./css/app.css";
import "./css/bootstrap.css";
import "./css/intlTelInput.css";
import "./css/user.css";
import '@fortawesome/fontawesome-free/css/all.min.css';

// import "./css/slick.css";
export const metadata = {
  title: "Game Hunt",
  description: "This is done my mohit",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ptSans.className}>{children}</body>
    </html>
  );
}
