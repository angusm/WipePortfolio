export default `
<div class="picture-frame">
    <div class="picture-frame__corner picture-frame__corner--top-left"></div>
    <div class="picture-frame__corner picture-frame__corner--top-right"></div>
    <div class="picture-frame__corner picture-frame__corner--bottom-left"></div>
    <div class="picture-frame__corner picture-frame__corner--bottom-right"></div>

    <div class="picture-frame__border picture-frame__border--top"></div>
    <div class="picture-frame__border picture-frame__border--right"></div>
    <div class="picture-frame__border picture-frame__border--bottom"></div>
    <div class="picture-frame__border picture-frame__border--left"></div>

    <div class="picture-frame__content">
        <ng-transclude></ng-transclude>
    </div>
</div>
`;