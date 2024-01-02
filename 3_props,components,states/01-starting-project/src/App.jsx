import Header from "./components/Header";
import CoreConcepts from "./components/CoreConcepts";
import TabButton from "./components/TabButton";
import { EXAMPLES } from "./data";

import { useState } from "react";

function App() {

  const [selectedTopic, setSelectedTopic] = useState('');

  // console.log(tabContent)

  const handleSelect = (selectedButton) => {
    // selectedButton : components , jsx , props , states

    setSelectedTopic(selectedButton)
  }

  let tabContent = <p>Please select a topic!</p>
  if (selectedTopic) {
    tabContent = <div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </pre>
    </div>
  }

  return (
    <div>

      <Header />

      <main>
        <CoreConcepts />

        <section id="examples">
          <h2>Examples</h2>

          <menu>
            <TabButton onSelect={() => handleSelect('components')} isSelected={'components' === selectedTopic}>Components</TabButton>
            <TabButton onSelect={() => handleSelect('jsx')} isSelected={'jsx' === selectedTopic}>JSX</TabButton>
            <TabButton onSelect={() => handleSelect('props')} isSelected={'props' === selectedTopic}>Props</TabButton>
            <TabButton onSelect={() => handleSelect('state')} isSelected={'state' === selectedTopic}>States</TabButton>
          </menu>


          {tabContent}

        </section>
      </main>
    </div>
  );
}

export default App;
