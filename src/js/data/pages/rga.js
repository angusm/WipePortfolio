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
        timeWorked: 'Mar 2016 - Present',
        projects: [
            {
                title: 'JS/HTML/CSS Readabilities',
                paragraphs: [
                    `
                Presented reviewers with contributions made to
                the Google code base to successfully demonstrate
                my merit and earned the ability to approve
                change lists.`,
                ],
            },
            {
                title: 'Internal Projects',
                paragraphs: [
                    `
                Worked on projects using, Django and Angular, for
                handling internal processes under the supervision of
                the CorpEng team.`,
                ],
            },
            {
                title: 'Duo Marketing Page',
                projectLink: 'https://duo.google.com',
                paragraphs: [
                    `
                Built a batch animation library to avoid jank on the
                full page wipe effect without using scroll-jacking
                CSS animations.`,
                ],
            },
            {
                title: 'Chrome Version Selection',
                projectLink: 'https://www.google.com/chrome',
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
                title: 'Maps Treks Update',
                projectLink: 'https://www.google.com/maps/about/behind-the-scenes/streetview/treks/pyramids-of-giza',
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
