const getRGAData = () => {
    return {
        code: 'rga',
        company: 'R/GA at Google',
        logo: `
        <div class="rga-google">
            <div class="rga-logo">
                <div class="rga-block"></div>
                <svg class="rga-type">
                    <use xlink:href="img/rga.svg#rga"></use>
                </svg>
            </div>
            <img class="job__logo-image google-logo"
                 src="img/google.svg">
        </div>`,
        title: 'Software Engineer',
        timeWorked: '2016 - Present',
        projects: [
            {
                title: 'Readability and Reviews',
                paragraphs: [
                    `As part of Google's process to ensure code quality, all
                    submissions must be vetted for readability as part of the
                    code review process, by a qualified reviewer`,
                    `To help contribute to my team I was selected as one of
                    our team members to undergo the process to attain 
                    Javascript readability. This process involved writing a
                    sizable chunk of code that contributed meaningfully to
                    Google's codebase and would serve as a strong example of
                    my best work.`,
                    `My code underwent a review process in which it was
                    examined for strict compliance with the google style guide,
                    for clarity in its structure and naming, for testability,
                    for maintainability and for demonstrating language mastery
                    and best practices.`,
                    `I was fortunate enough to have learned from the outstanding
                    people around me and was able to attain review approval for
                    Javascript readability with a record low amount of revisions
                    for my team.
                    I was then happy to be able to review and approve
                    submissions by my teammates as well as others throughout the
                    organization.`
                ],
            },
            {
                title: 'Chrome Version Selection',
                link: 'https://www.google.com/chrome',
                icon: 'img/chrome.webp',
                paragraphs: [
                    `
                Updated script that delivers the appropriate
                <a href="https://www.google.com/chrome/browser/desktop/index.html?extra=devchannel">dev</a>,
                <a href="https://www.google.com/chrome/browser/beta.html">beta</a>,
                <a href="https://www.google.com/chrome/browser/desktop/">consumer</a>
                or
                <a href="https://www.google.com/chrome/browser/canary.html">canary</a>
                version of Chrome to user based on their OS, its
                version, whether it's 32 or 64-bit and the user's
                browser.`,
                ],
            },
            {
                title: 'Internal Project',
                paragraphs: [
                    `
                Worked on a project using Django and Angular, for
                handling internal processes under the supervision of
                the CorpEng team.`,
                ],
            },
            {
                title: 'Duo',
                link: 'https://duo.google.com',
                icon: 'img/duo.webp',
                paragraphs: [
                    `
                Built a batch animation library to avoid jank on the
                full page wipe effect without using scroll-jacking
                CSS animations.`,
                ],
            },
            {
                title: 'Maps Treks',
                link: 'https://www.google.com/maps/about/behind-the-scenes/streetview/treks/pyramids-of-giza',
                icon: 'img/maps.webp',
                paragraphs: [
                    `
                Updated the existing sites for
                <a href="https://www.google.com/maps/about/behind-the-scenes/streetview/treks/pyramids-of-giza/">Egypt</a>,
                <a href="https://www.google.com/maps/about/behind-the-scenes/streetview/treks/gombe-tanzania/">Tanzania</a>
                and
                <a href="https://www.google.com/maps/about/behind-the-scenes/streetview/treks/samburu-kenya/">Kenya</a>
                to retroactively add responsive styles and features.`,
                ],
            },
        ]
    };
};

export default getRGAData;
