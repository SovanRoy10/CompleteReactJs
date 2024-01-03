import { CORE_CONCEPTS } from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";

export default function CoreConcepts() {
    return (
        <Section title="Core Concepts" id='core-concepts'>
            <ul>
                {/* <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />

            <CoreConcept title={CORE_CONCEPTS[1].title} description={CORE_CONCEPTS[1].description} image={CORE_CONCEPTS[1].image} />

            <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image} /> */}


                {/* {
              CORE_CONCEPTS.map((value,index) => {
                return <CoreConcept key={CORE_CONCEPTS[index].title} title={CORE_CONCEPTS[index].title} description={CORE_CONCEPTS[index].description} image={CORE_CONCEPTS[index].image} />
              })
            } */}


                {
                    CORE_CONCEPTS.map((ConceptItem) => {
                        return <CoreConcept key={ConceptItem.title} {...ConceptItem} />
                    })
                }

            </ul>

        </Section>
    )
}
