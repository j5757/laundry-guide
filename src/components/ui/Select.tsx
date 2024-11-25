import React from 'react';

interface SelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: { id: string; label: string }[];
}

export function Select({ label, value, onChange, options }: SelectProps) {
  return (
    <div className="mb-4">
      <label className="block text-lg font-medium text-gray-700 mb-2">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-full px-4 py-3 text-lg border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}