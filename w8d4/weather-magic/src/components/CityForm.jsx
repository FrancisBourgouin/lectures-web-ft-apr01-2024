import useForm from "../hooks/useForm";

export default function CityForm(props) {
  const { onSubmit } = props;
  const initialValues = { city: "" };

  const { formData, handleChange, handleSubmit } = useForm(initialValues, onSubmit);

  return (
    <form className="CityForm" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your city name!"
        name="city"
        value={formData.city}
        onChange={handleChange}
      />
      <button>Fetch weather</button>
    </form>
  );
}
