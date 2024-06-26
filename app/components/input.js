export default function Input({
  label,
  placeholder,
  type,
  id,
  width,
  value,
  onChange,
  readOnly,
}) {
  // if there is no`width` prop, the default value is `w-full`

  width = width ? `w-[${width}px]` : "w-full";
  placeholder = placeholder ? placeholder : "";
  return (
    <div class="flex flex-col ">
      <label class="mb-1 text-sm font-normal text-gray-500" htmlFor={id}>
        {label}
      </label>
      <input
        placeholder={placeholder}
        class={`mb-6 ${width} rounded border-none p-3 text-base font-normal text-black placeholder-gray-500 ring-2 ring-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500`}
        type={type}
        id={id}
        value={value}
        readOnly={readOnly}
        onChange={onChange}
      />
    </div>
  );
}
