export default function Usercard({ name, role, country }) {
  return (
    <div>
      <h3>
        Name: {name} <br />
        Role: {role} <br />
        Country: {country}
      </h3>
    </div>
  );
}
