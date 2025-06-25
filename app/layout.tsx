import Navbar from './components/Navbar';
import './globals.css';

export const metadata = {
  title:'Portfolio web Jonathan Fernandez',
  description:'My portfolio web'
};

export default function RootLayout({ children } : { children: React.ReactNode}) {
return(
<html lang='en'>
 <body>
  <Navbar />
  {children}
 </body>
</html>
);

}