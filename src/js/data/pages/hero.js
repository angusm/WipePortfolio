const getHeroData = () => {
    return {
        code: 'hero',
        logo: ``,
        isHero: true,
        title: 'Angus MacDonald',
        company: `
            <a href="mailto:angus@angusmacdonald.ca">
                angus@angusmacdonald.ca</a>`,
        projects: [
            {
                title: 'About Me',
                paragraphs: [
                    `Hi there, I'm Angus.`,
                    `I'm not overly complicated but I enjoy what I do and that
                    keeps me pretty happy. I love writing code, but that doesn't
                    make me particularly unique amongst developers. I think what
                    sets me apart is that I don't just love greenfield projects.
                    It's a little weird, but I think I may enjoy working in
                    existing code just as much if not more. Refactoring out
                    redundancies, scrapping unnecessary code, upping test
                    coverage and plain old bug-fixes are immensely satisfying.`,
                    `When I'm not working on code, if I'm being honest, I'm not
                    crazy exciting. I'm probably playing videogames with my
                    brothers, binging on Netflix with my fiancée or prepping
                    to DM the next DND session with my friends. Although
                    occasionally I get out of the house to visit family, check
                    out a new brewery or dirtbike for a bit.`
                ],
            },
            {
                title: 'LinkedIn',
                link: 'https://ca.linkedin.com/in/angus-macdonald-34426719',
                icon: 'img/linkedin.svg',
            },
            {
                title: 'GitHub',
                link: 'https://github.com/angusm',
                icon: 'img/github.svg',
            },
            {
                title: 'Email',
                link: 'mailto:angus@angusmacdonald.ca',
                icon: 'img/email.svg',
            },
            {
                class: 'hero-cta',
                linkTarget: '_self',
                link: '#rga',
                icon: 'img/down-chevron.svg',
            },
        ],
    };
};

export default getHeroData;
