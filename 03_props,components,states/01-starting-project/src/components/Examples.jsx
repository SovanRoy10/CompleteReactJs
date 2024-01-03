import { useState } from 'react'
import { EXAMPLES } from '../data';
import TabButton from './TabButton';
import Section from './Section';
import Tabs from './Tabs';

export default function Examples() {
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
        <Section title="Examples" id="examples">

            <Tabs 
            buttonsContainer="menu"
            buttons={
                <>
                    <TabButton onSelect={() => handleSelect('components')} isSelected={'components' === selectedTopic}>Components</TabButton>

                    <TabButton onSelect={() => handleSelect('jsx')} isSelected={'jsx' === selectedTopic}>JSX</TabButton>

                    <TabButton onSelect={() => handleSelect('props')} isSelected={'props' === selectedTopic}>Props</TabButton>

                    <TabButton onSelect={() => handleSelect('state')} isSelected={'state' === selectedTopic}>States</TabButton>
                </>
            }>
                {tabContent}
            </Tabs>

        </Section>
    )
}
