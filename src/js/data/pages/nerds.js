const getNerdsData = () => {
    return {
        code: 'nerds',
        company: 'Nerd Corps Entertainment / DHX Media',
        logo: `
        <div class="job__logo">
            <div class="job__logo-container">
                <img class="job__logo-image nerds-logo" src="img/nerdstar.png">
            </div>
        </div>`,
        title: 'Developer',
        timeWorked: 'Aug. 2014 - Feb. 2016',
        projects: [
            {
                title: 'Artemis',
                paragraphs: [
                    `
                            Used Django and Angular to build scheduling and
                            estimation tools that connected to
                            <a href="https://shotgunsoftware.com">Shotgun</a>.
                            Proved viability, prototyped, architected,
                            scheduled developers and wrapped the Shotgun
                            API in an ORM that duplicated Django's to
                            simplify dev.`,
                ],
            },
            {
                title: 'Muse',
                paragraphs: [
                    `
                            Built system for annotating video to provide
                            animation feedback. Similar to drawings done on a
                            televised sports replay. System was developed in
                            Django & Angular.`,
                ],
            },
            {
                title: 'Kate and Mim-Mim',
                projectLink: "http://www.kateandmimmim.ca",
                paragraphs: [
                    `
                            Built responsive embedded game component that
                            transferred from in-page embed to modal without
                            losing game progress depending on the size of the
                            browser or tablet orientation.`,
                ],
            },
            {
                title: 'Slugterra',
                projectLink: 'http://www.slugterra.com',
                paragraphs: [
                    `
                            Setup caching for localization and styled out
                            issues relating to new locales in addition to
                            content updates. Built with PHP, jQuery & Knockout.`,
                ],
            },
            {
                title: 'SPARCX',
                paragraphs: [
                    `
                            Using Perl, PHP and jQuery, helped team maintain the
                            pipeline management tool the company depended on
                            that had been written ~10 years before I started
                            there..`,
                ],
            },
        ]
    };
};

export default getNerdsData;
