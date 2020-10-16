import { Button } from '../components/button';
import * as React from 'react';
import { Navbar } from '../components/navbar';

const Index: React.FC = () => {
  return (
    <div>
      <Navbar />
      <div className="p-10">
        <h1 className="text-gray-800 font-semibold text-2xl">
          Button Components
        </h1>
        <p className="mb-5 text-gray-600 text-lg">
          Simple, adaptable, and reuseable
        </p>
        <div className="flex space-x-5">
          <Button variant="primary">New Job</Button>
          <Button variant="secondary">New Job</Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
