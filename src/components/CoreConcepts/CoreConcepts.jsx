import CoreConcept from './CoreConcept/CoreConcept';
import { CORE_CONCEPTS } from '../../data';

import './CoreConcepts.css';

function CoreConcepts() {
  return (
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
  );
}

export default CoreConcepts;
