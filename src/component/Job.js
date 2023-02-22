import React from 'react'
import {Container} from 'react-bootstrap'
import { useTranslation } from 'react-i18next';

function Job() {
    const { t} = useTranslation();

   
    window.scrollTo(250, 250);

    return (
        <div className='job'>
            <Container>
                <div className='part1'>
                    <h2>{t("career.job.description")}</h2>
                    <ul>
                        <li>Build mobile applications following industry best practices.</li>
                        <li>Build multi-platform apps for iOS and Android using Google’s Flutter development
                            framework.
                        </li>
                        <li>Design and develop high-volume, low-latency applications and deliver high availability and
                            performance.
                        </li>
                        <li>Build reusable code and libraries for future use.</li>
                        <li>Write well designed, scalable, robust, testable, efficient, and easily maintainable code
                        </li>
                        <li>Participate in all phases of the development life-cycle</li>
                        <li>Assist in the preparation and deployment of releases of software components</li>
                        <li>Ensure designs are in compliance with specifications</li>
                        <li>Troubleshooting and debugging to optimize performance.</li>
                        <li>Work in an Agile environment of fast and efficient delivery without compromising product
                            quality
                        </li>
                    </ul>
                </div>

                <div className='part2'>
                    <h2>{t("career.job.requirements")}</h2>
                    <ul>
                        <li>Bachelor’s degree in Computer Science, Engineering, or a related discipline.</li>
                        <li>+1 year Experience as flutter developer.</li>
                        <li>write reusable code.</li>
                        <li>Have experience with Flutter for both iOS and Android.</li>
                        <li>Familiar with state management tools such as provider or bloc.</li>
                        <li>Experience with RESTful APIs</li>
                        <li>Firebase (real-time database).</li>
                        <li>Maps (tracking &get location).</li>
                        <li>Familiarity with code versioning tools.</li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}

export default Job