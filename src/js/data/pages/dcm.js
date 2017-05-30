const getDCMData = () => {
    return {
        code: 'dcm',
        company: 'DCM Studios',
        logo: `
                <div class="job__logo">
                    <div class="job__logo-container">
                        <img class="job__logo-image dcm-logo" src="img/dcm.png">
                    </div>
                </div>`,
        title: 'Part-Time Contractor',
        timeWorked: '2010 - 2016',
        projects: [
            {
                title: 'Para Paints',
                link: 'past-projects/para-2016/index.html',
                paragraphs: [
                    `
                            Created static content to be embedded in pages for
                            para.com that adapted the designs of their
                            brochures. Original site was not responsive and has
                            been replaced. Link points to the 2016 collection
                            that is no longer live.`,
                ],
            },
            {
                title: 'Misc.',
                paragraphs: [
                    `
                            Helped with a small contract for Darwin Construction
                            that was ultimately cancelled and occasional work
                            for DCM's own site. None of this work is still
                            live or has been retained.`,
                ],
            },
        ]
    };
};

export default getDCMData;
