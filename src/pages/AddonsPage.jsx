import { useState } from 'react';
import { BillingCard } from '../components/BillingCard';
import { ToggleIcon } from '../components/ToggleIcon';
import { BUTTONS_TEXT, TIME_TYPES } from '../constants/consts';
import { FormLayout } from '../layout/FormLayout';

const pageData = {
  title: 'Select your plan',
  description: 'You have the option of monthly or yearly billing.',
};

export const AddonsPage = () => {
  const [timeType, setTimeType] = useState(TIME_TYPES.MONTHLY);

  const handleChecked = (value) => {
    console.log('value', value);
    const timeType = value ? TIME_TYPES.YEARLY : TIME_TYPES.MONTHLY;
    setTimeType(timeType);
  };

  return (
    <FormLayout title={pageData.title} description={pageData.description}>
      <section className='flex justify-between w-full '>
        <BillingCard
          title={'Arcade'}
          price={'90'}
          timeType={timeType}
          iconImg={'src/assets/images/icon-arcade.svg'}
        />
        <BillingCard
          title={'Advanced'}
          price={'120'}
          timeType={timeType}
          iconImg={'src/assets/images/icon-advanced.svg'}
        />
        <BillingCard
          title={'Pro'}
          price={'150'}
          timeType={timeType}
          iconImg={'src/assets/images/icon-pro.svg'}
        />
      </section>
      <footer className='flex flex-col gap-28 '>
        <section className='bg-magnolia p-3'>
          <ToggleIcon handleChecked={handleChecked} />
        </section>

        <button
          type='submit'
          className='w-fit self-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5'
        >
          {BUTTONS_TEXT.NEXT_STEP}
        </button>
      </footer>
    </FormLayout>
  );
};
