'use client';
import Image from "next/image"
import { SearchParams } from '@/interfaces/index';
import { useState } from 'react';



const SearchBar = () => {
  const [form, setForm] = useState<SearchParams>({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value) : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Search:', form);
    // TODO: Add navigation logic or API call here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-row items-center gap-4 bg-white px-8 py-2 rounded-full border border-gray-200 shadow-sm max-w-[737px]"
    >
      {/* Location */}
      <div className='flex flex-col gap-[2px] text-gray-600 placeholder-gray-300'>
        <label htmlFor='location'>Location</label>
        <input
          type="text"
          name="location"
          placeholder="Search for destination"
          value={form.location}
          onChange={handleChange}
          className="flex-1 rounded-md outline-none focus:ring-2 focus:ring-zinc-500 "
          required
        />
      </div>

      {/* Divider */}
      <div className="bg-gray-200 w-[1.5px] h-8"></div>

      {/* Check-in */}
      <div className='flex flex-col gap-[2px]'>
        <label htmlFor='checkIn'>Check in</label>
        <input
          type="text"
          name="checkIn"
          placeholder='Add date'
          value={form.checkIn}
          onChange={handleChange}
          className="w-24 rounded-md outline-none focus:ring-2 focus:ring-zinc-500"
          required
        />
      </div>

      {/* Divider */}
      <div className="bg-gray-200 w-[1.5px] h-8"></div>

      {/* Check-out */}
      <div className='flex flex-col gap-[2px]'>
        <label htmlFor='checkOut'>Check out</label>
        <input
          type="text"
          name="checkOut"
          placeholder='Add date'
          value={form.checkOut}
          onChange={handleChange}
          className="w-24 rounded-md outline-none focus:ring-2 focus:ring-zinc-500"
          required
        />
      </div>

      {/* Divider */}
      <div className="bg-gray-200 w-[1.5px] h-8"></div>

      {/* Guests */}
      <div className='flex flex-col gap-[2px]'>
        <label htmlFor="guests">People</label>
      <input
        type="number"
        name="guests"
        value={form.guests}
        placeholder='Add guest'
        onChange={handleChange}
        className="w-24 rounded-md outline-none focus:ring-2 focus:ring-zinc-500"
        required
      />
      </div>

      {/* Submit */}
      <button
        type="submit"
      >
        <Image 
          src="assets/search.svg"
          alt="search"
          width={42}
          height={42}
        />
      </button>
    </form>
  );
}

export default SearchBar