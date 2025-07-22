import { useLocation } from 'react-router';

export default function Scroll() {

  const location = useLocation();
  console.log("Scroll location:", location);

  return (
    <div className="absolute bottom-0 right-0">
        <p></p>
    </div>
  );
}
