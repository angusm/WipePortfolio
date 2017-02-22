export default `
<portfolio-section>
    <portfolio-image>
        <ng-transclude ng-transclude-slot="portfolioPageImage"></ng-transclude>
    </portfolio-image>
</portfolio-section>
<portfolio-section>
    <portfolio-content>
        <ng-transclude ng-transclude-slot="portfolioPageContent"></ng-transclude>
    </portfolio-content>
</portfolio-section>
`;