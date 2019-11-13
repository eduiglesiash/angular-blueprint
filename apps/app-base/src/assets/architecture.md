# Architecture

A mono repository solution as a base for creating big Angular applications

Powered by [Nx-dev tools](https://nx.dev/web)

Based on [Enterprise Angular Book](https://leanpub.com/enterprise-angular) by [Manfred Steyer](https://twitter.com/ManfredSteyer)

TOC:
- 1. Projects
- 2. Libraries
- 3. Tools
- 4. Patterns and techniques

## 1. Projects

### 1.1 App Base

Sample application with no real business functionality. Only to show the use of this architecture.

---

## 2. Libraries

Extensible use of libraries. Specially those related with infrastructure or utilities.

### 2.1 Layout

The more complex at the moment. Scaffolded following the advice of domain driven architectures.

Intended to provide a set of predefined layouts. Starting with a typical **Admin** disposition.

#### feature

Public container components.

- AdminComponent

#### UI

Dumb components as bricks to build a layout.

- TopBar

- AppNavigator

- LegalCredits

- ExternalLink

- _Modal_

#### domain

Services and interfaces exposed for work with this domain

- LayoutFacadeService

- LinkInterface

### 2.2 PWA

Everything related to work with PWA. So simple at the moment that is an ideal sample of a library in only one layer.

- PwaService

### 2.3 Tracker

Domain for being responsible of logs, and analytics.

Uses advanced concepts of dependency injection.

Uses Google Tag Manager transparently if provided with a valid account ID.

- TrackerService

- GtagService

- RoutesService

- ErrorHandlerService

- _ErrorInterceptor, to be done..._

### 2.4 Documents

Imports [ngx-markdown](https://github.com/jfcere/ngx-markdown) and hides its internal to the application.

### 2.3 Blueprint

Is a vanilla TypeScript library intended to provide models, interfaces and basic utilities for all the other libraries.

---

## 3. Tools

A bunch of modern tools ready to be used

### 3.1 e2e testing

- Cypress

### 3.2 Unit Testing

- Jest

### 3.3 PWA:

 - PWA icons

### 3.4 SEO:

 - https://www.npmjs.com/package/ngx-seo

### 3.5 Release versions

- https://www.npmjs.com/package/ngx-semantic-version

### 3.6 Auth

- https://www.npmjs.com/package/angular-oauth2-oidc

### 3.7 CSS Grid

- https://stackblitz.com/edit/host-binding-and-css-grid
---

## 4 Patterns and techniques

Last but no least: the most important decisions has been taken into account.

### 4.1 Smart Container / dumb presenters

For better reuse of ui components and sharing of responsibilities.

### 4.2 OnPush Change detection strategy

For better change detection performance.

### 4.3 Simple Observable Store

For communicate between non related components.

### 4.4 Reactive forms

For better validation and control over the changes on data and form itself.

### 4.5 Services configuration by token injection

For custom functionality with out need of code changes.

> Hope you can use or learn something from this open source work.
>
> -- Alberto Basalo
