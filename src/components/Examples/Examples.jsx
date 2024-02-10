import TabButton from '../TabButton/TabButton';
import { EXAMPLES } from '../../data';
import Section from '../wrapper/Section';
import Tabs from '../wrapper/Tabs';

import './Examples.css';

import { useState } from 'react';

function Examples() {
  const [selected, setSelected] = useState();

  function handleClick(identifier) {
    setSelected(identifier);
  }
  return (
    <Section className="examples" title="Examples">
      <Tabs
        ButtonContainer="menu"
        buttons={
          <>
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
          </>
        }
      >
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
      </Tabs>
    </Section>
  );
}

export default Examples;
