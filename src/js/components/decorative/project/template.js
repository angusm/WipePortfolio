export default `
<div class="project__expand-button-container">
    <input type="radio"
        class="project__expand-button"
        ng-checked="$ctrl.projectExpanded" 
        name="{{$ctrl.projectGroup}}">
    <label for="project" class="project__title">
        <img class="project__logo" src="{{$ctrl.projectIcon}}">
        <div class="project__name-and-link">
            <div class="project__name">{{$ctrl.projectTitle}}</div>
            <a class="project__link"
               ng-if="$ctrl.projectLink"
               target="_blank"
               href="{{$ctrl.projectLink}}">
                Visit
            </a>
        </div>
    </label>
    <div class="project__details">
        <ng-transclude></ng-transclude>
    </div>
</div>
`;