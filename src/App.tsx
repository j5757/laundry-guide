import React, { useState } from 'react';
import { WashingMachine } from 'lucide-react';
import { Select } from './components/ui/Select';
import { StepCard } from './components/StepCard';
import { laundrySteps, checkpoints, foldingGuides } from './data/laundryData';

function App() {
  const [sortingType, setSortingType] = useState('');
  const [stainType, setStainType] = useState('');
  const [detergentType, setDetergentType] = useState('');
  const [washerSetting, setWasherSetting] = useState('');
  const [dryerSetting, setDryerSetting] = useState('');
  const [foldingType, setFoldingType] = useState('');

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-blue-600 text-white py-6 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3">
            <WashingMachine className="w-8 h-8" />
            <h1 className="text-3xl font-bold">Laundry Guide</h1>
          </div>
          <p className="mt-2 text-xl">Step-by-step help with your laundry</p>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Input Section */}
          <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-6">What do you need help with?</h2>
            
            <Select
              label="How do you want to sort your clothes?"
              value={sortingType}
              onChange={setSortingType}
              options={laundrySteps.sorting.map(({ id, label }) => ({ id, label }))}
            />

            <Select
              label="Do you have any stains to remove?"
              value={stainType}
              onChange={setStainType}
              options={laundrySteps.stains.map(({ id, label }) => ({ id, label }))}
            />

            <Select
              label="What type of detergent are you using?"
              value={detergentType}
              onChange={setDetergentType}
              options={laundrySteps.detergent.map(({ id, label }) => ({ id, label }))}
            />

            <Select
              label="Which washer setting should you use?"
              value={washerSetting}
              onChange={setWasherSetting}
              options={laundrySteps.washerSettings.map(({ id, label }) => ({ id, label }))}
            />

            <Select
              label="Which dryer setting should you use?"
              value={dryerSetting}
              onChange={setDryerSetting}
              options={laundrySteps.dryerSettings.map(({ id, label }) => ({ id, label }))}
            />

            <Select
              label="What do you need to fold?"
              value={foldingType}
              onChange={setFoldingType}
              options={foldingGuides.map(({ id, label }) => ({ id, label }))}
            />
          </section>

          {/* Instructions Section */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Your Personalized Instructions</h2>

            <div className="grid gap-6 md:grid-cols-2">
              {sortingType && (
                <StepCard
                  title="Sorting Clothes"
                  {...laundrySteps.sorting.find(s => s.id === sortingType)!}
                />
              )}

              {stainType && (
                <StepCard
                  title="Stain Removal"
                  {...laundrySteps.stains.find(s => s.id === stainType)!}
                />
              )}

              {detergentType && (
                <StepCard
                  title="Detergent Instructions"
                  {...laundrySteps.detergent.find(d => d.id === detergentType)!}
                />
              )}

              {washerSetting && (
                <StepCard
                  title="Washer Settings"
                  {...laundrySteps.washerSettings.find(w => w.id === washerSetting)!}
                />
              )}

              {dryerSetting && (
                <StepCard
                  title="Dryer Settings"
                  {...laundrySteps.dryerSettings.find(d => d.id === dryerSetting)!}
                />
              )}

              {foldingType && (
                <StepCard
                  title="Folding Instructions"
                  instructions={foldingGuides.find(f => f.id === foldingType)!.steps.join('\n')}
                />
              )}
            </div>

            {(washerSetting || dryerSetting) && (
              <div className="bg-white rounded-lg shadow-md p-6 mt-6">
                <h3 className="text-xl font-semibold mb-4">How to know when it's done:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  {washerSetting && checkpoints.washer.map((point, i) => (
                    <li key={i} className="text-lg">{point}</li>
                  ))}
                  {dryerSetting && checkpoints.dryer.map((point, i) => (
                    <li key={i} className="text-lg">{point}</li>
                  ))}
                </ul>
              </div>
            )}
          </section>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-6 px-4 mt-12">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg">Need more help? Ask your teacher or supervisor.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;