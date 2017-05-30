const getAVPData = () => {
    return {
        code: 'avp',
        company: 'Associated Veterinary Purchasing',
        logo: `
                <div class="job__logo">
                    <div class="job__logo-container">
                        <div class="avp-image job__logo-image">
                            <img class="avp-logo" src="img/avp.gif">
                        </div>
                    </div>
                </div>`,
        title: 'Developer',
        timeWorked: 'Jan. 2013 - Aug. 2014',
        projects: [
            {
                title: 'jBASE System',
                paragraphs: [
                    `
                            Maintained a legacy system first established in
                            1989. Features related to payroll, time-sheets,
                            inventory, SOs, POs, waybills, rebates and more.
                            Using GOTOs and 3-character variable names in
                            ALL_CAPS the system processed thousands of orders
                            a day.`,
                ],
            },
            {
                title: 'Portal',
                paragraphs: [
                    `
                            Worked a CakePHP sub-site into an existing
                            third-party CMS site by replicating templates. Added
                            and maintained features relating to online
                            statements and invoices connected to the jBASE
                            system.`,
                ],
            },
            {
                title: 'Shop',
                paragraphs: [
                    `
                            Developed an online ordering site with CakePHP and
                            jQuery that was never able to be scheduled for
                            QA and as such was never pushed live. Was to
                            integrate with existing jBASE system and replace
                            existing .NET based online ordering site.`,
                ],
            },
        ]
    };
};

export default getAVPData;
