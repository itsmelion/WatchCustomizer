<aside class=layout-column-start ng-switch on=selected>

    <ul class="layout-row-center list">
        <li ng-repeat="item in baseWatch" ng-click="switch(item.name)">
            <?php include './images/icon.svg'; ?>
            <small>{{item.name}}</small>
        </li>
    </ul>

    <div class="layout-row" ng-switch-when="case">
        <article ng-repeat="case in baseWatch.case.options">
            <button data-watch ng-click="select('case',case)">{{case.name}}
            <img height=80px width=auto ng-src="/images/{{case.image}}" /></button>
        </article>
    </div>

    <div class="layout-row" ng-switch-when="bezel">
        <article ng-repeat="bezel in baseWatch.bezel.options">
            <button data-watch ng-click="select('bezel',bezel)">{{bezel.name}}
            <img height=80px width=auto ng-src="/images/{{bezel.image}}" /></button>
        </article>
    </div>

    <div class="layout-row" ng-switch-when="dial">
        <article ng-repeat="dial in baseWatch.dial.options">
            <button data-watch ng-click="select('dial',dial)">{{dial.name}}
            <img height=80px width=auto ng-src="/images/{{dial.image}}" /></button>
        </article>
    </div>

    <div class="layout-row" ng-switch-when="hands">
        <article ng-repeat="hands in baseWatch.hands.options">
            <button data-watch ng-click="select('hands',hands)">{{hands.name}}
            <img height=80px width=auto ng-src="/images/{{hands.image}}" /></button>
        </article>
    </div>

    <div class="layout-row" ng-switch-when="strap">
        <article ng-repeat="strap in baseWatch.strap.options">
            <button data-watch ng-click="select('strap',strap)">{{strap.name}}
            <img height=80px width=auto ng-src="/images/{{strap.image}}" /></button>
        </article>
    </div>

</aside>