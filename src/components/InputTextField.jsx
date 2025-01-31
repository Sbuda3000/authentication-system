import { memo } from "react";
import { useFormContext } from "react-hook-form";

const InputTextField = memo(({ id, type, label, validation, disabled, mode }) => {
  const {
    register,
    formState: { errors },
    trigger,
  } = useFormContext();

  return (
    <>
      <input
        className="input-text-field"
        id={id}
        type={type}
        {...register(id, { ...validation, onChange: () => trigger(id) })}
        placeholder={label}
        disabled={disabled}
      />
      {errors[id] && mode === 'register' && 
      <div className="error-block">
        <div className="error-message">
            {errors[id].message}
        </div>
      </div>
      }
      {errors[id] && mode === 'login' && 
      <div className="error-block">
        <div className="error-message">
            {errors[id].message}
        </div>
      </div>
      }
    </>
  );
});

export default InputTextField;