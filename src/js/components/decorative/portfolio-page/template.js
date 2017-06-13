export default `
<portfolio-section>
    <div class="job">
        <h1 class="job__title"
            ng-bind="$ctrl.jobTitle"
            ng-if="$ctrl.jobTitle && $ctrl.isHero"></h1>
        <h2 class="job__title"
            ng-bind="$ctrl.jobTitle"
            ng-if="$ctrl.jobTitle && !$ctrl.isHero"></h2>
        <h3 class="job__company"
            ng-bind-html="$ctrl.jobCompany"
            ng-if="$ctrl.jobCompany"></h3>
        <h3 class="job__time-worked"
            ng-bind-html="$ctrl.jobTimeWorked"
            ng-if="$ctrl.jobTimeWorked"></h3>
    </div>
    <portfolio-image>
        <ng-transclude ng-transclude-slot="portfolioPageImage">
        </ng-transclude>
    </portfolio-image>
</portfolio-section>
<portfolio-section>
    <portfolio-content>
        <ng-transclude ng-transclude-slot="portfolioPageContent"></ng-transclude>
    </portfolio-content>
</portfolio-section>
`;