import { useState } from 'react';
import CoreConcept from './components/CoreConcept/CoreConcept.jsx';
import Header from './components/Header/Header.jsx';
import TabButton from './components/TabButton/TabButton.jsx';

import { CORE_CONCEPTS, EXAMPLES } from './data';

function App() {
  const [selected, setSelected] = useState();

  function handleClick(identifier) {
    setSelected(identifier);
  }

  return (
    <main>
      <Header />
      <section>
        <div className="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map((item) => (
              <CoreConcept key={item.title} {...item} />
            ))}
          </ul>
        </div>
      </section>
      <section className="examples">
        <h2>Examples</h2>
        <menu className="tab-buttons">
          <TabButton
            isSelected={selected === 'components'}
            onSelect={() => handleClick('components')}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={selected === 'jsx'}
            onSelect={() => handleClick('jsx')}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selected === 'props'}
            onSelect={() => handleClick('props')}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={selected === 'state'}
            onSelect={() => handleClick('state')}
          >
            State
          </TabButton>
        </menu>
        {!selected && <p className="info">Please select tab button!</p>}
        {selected && (
          <div className="tab-content">
            <h3>{EXAMPLES[selected].title}</h3>
            <p>{EXAMPLES[selected].description}</p>
            <pre>
              <code>{EXAMPLES[selected].code}</code>
            </pre>
          </div>
        )}
      </section>
    </main>
  );
}

export default App;
