export default `
<div class="portfolio-page-container">
    <portfolio-section>
        <portfolio-image>
            <ng-transclude ng-transclude-slot="portfolioPageImage">
            </ng-transclude>
            <h1 class="job__title"
                ng-bind="$ctrl.jobTitle"
                ng-if="$ctrl.jobTitle"></h1>
            <h2 class="job__time-worked"
                ng-bind-html="$ctrl.jobTimeWorked"
                ng-if="$ctrl.jobTimeWorked"></h2>
            <hr class="job__line" ng-if="$ctrl.jobTitle && $ctrl.jobTimeWorked">
        </portfolio-image>
    </portfolio-section>
    <portfolio-section>
        <portfolio-content>
            <ng-transclude ng-transclude-slot="portfolioPageContent"></ng-transclude>
        </portfolio-content>
    </portfolio-section>
</div>
`;