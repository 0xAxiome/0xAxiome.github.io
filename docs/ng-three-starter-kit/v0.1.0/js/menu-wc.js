'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">ng-three-starter-kit documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-ec2e5566f947761b845b52ff21425630126a6e9aa9246cb099febf9540bf7ae501567fadadfeaeb0106820512ae5e352562a19bb4450f8d099afb89f646694ea"' : 'data-target="#xs-components-links-module-AppModule-ec2e5566f947761b845b52ff21425630126a6e9aa9246cb099febf9540bf7ae501567fadadfeaeb0106820512ae5e352562a19bb4450f8d099afb89f646694ea"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-ec2e5566f947761b845b52ff21425630126a6e9aa9246cb099febf9540bf7ae501567fadadfeaeb0106820512ae5e352562a19bb4450f8d099afb89f646694ea"' :
                                            'id="xs-components-links-module-AppModule-ec2e5566f947761b845b52ff21425630126a6e9aa9246cb099febf9540bf7ae501567fadadfeaeb0106820512ae5e352562a19bb4450f8d099afb89f646694ea"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ThreeViewerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ThreeViewerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/AnimationHolder.html" data-type="entity-link" >AnimationHolder</a>
                            </li>
                            <li class="link">
                                <a href="classes/CameraHolder.html" data-type="entity-link" >CameraHolder</a>
                            </li>
                            <li class="link">
                                <a href="classes/ControlsHolder.html" data-type="entity-link" >ControlsHolder</a>
                            </li>
                            <li class="link">
                                <a href="classes/DebugGUI.html" data-type="entity-link" >DebugGUI</a>
                            </li>
                            <li class="link">
                                <a href="classes/Engine.html" data-type="entity-link" >Engine</a>
                            </li>
                            <li class="link">
                                <a href="classes/Environment.html" data-type="entity-link" >Environment</a>
                            </li>
                            <li class="link">
                                <a href="classes/Floor.html" data-type="entity-link" >Floor</a>
                            </li>
                            <li class="link">
                                <a href="classes/Fox.html" data-type="entity-link" >Fox</a>
                            </li>
                            <li class="link">
                                <a href="classes/RendererHolder.html" data-type="entity-link" >RendererHolder</a>
                            </li>
                            <li class="link">
                                <a href="classes/ResourceHandler.html" data-type="entity-link" >ResourceHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/ScreenSizeHandler.html" data-type="entity-link" >ScreenSizeHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/TimeHandler.html" data-type="entity-link" >TimeHandler</a>
                            </li>
                            <li class="link">
                                <a href="classes/World.html" data-type="entity-link" >World</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/EnvironmentMapHolder.html" data-type="entity-link" >EnvironmentMapHolder</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IDestroyable.html" data-type="entity-link" >IDestroyable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IListenable.html" data-type="entity-link" >IListenable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IResizable.html" data-type="entity-link" >IResizable</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISize.html" data-type="entity-link" >ISize</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/ISource.html" data-type="entity-link" >ISource</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/IUpdatable.html" data-type="entity-link" >IUpdatable</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise-inverted.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});