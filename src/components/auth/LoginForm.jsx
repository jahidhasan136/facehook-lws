import { useForm } from 'react-hook-form';
import Field from '../shared/Field';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (formData) => {
    console.log(formData);
    navigate('/');
  };
  return (
    <form
      className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]"
      onSubmit={handleSubmit(submitForm)}
    >
      {/* <!-- email --> */}
      <Field label="Email" error={errors.email}>
        <input
          {...register('email', { required: 'Email ID is Required' })}
          className={`auth-input ${
            errors.email ? 'border-red-500' : 'border-gray-200'
          }`}
          name="email"
          type="email"
          id="email"
        />
      </Field>
      {/* <!-- password --> */}
      <Field label="Password" error={errors.password}>
        <input
          {...register('password', {
            required: 'Password is Required',
            minLength: {
              value: 8,
              message: 'Your password must be at least 8 characters',
            },
          })}
          className={`auth-input ${
            errors.password ? 'border-red-500' : 'border-gray-200'
          }`}
          name="password"
          type="password"
          id="password"
        />
      </Field>
      {/* <!-- Submit --> */}
      <Field>
        <button
          className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
          type="submit"
        >
          Login
        </button>
      </Field>
    </form>
  );
};

export default LoginForm;
