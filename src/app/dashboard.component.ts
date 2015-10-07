import {Component, FORM_DIRECTIVES, View} from 'angular2/angular2';

@Component({ selector: 'my-dashboard' })
@View({
	template: `
		<div class="t-app">
		  <header class="t-header"></header>
		  <main class="t-main">
		    <div class="t-goats">
		      <!-- goats go here -->
		      <div class="t-goat">
		        <img src="" alt="" class="t-photo">
		        <div class="t-info">
		          <span class="t-name"></span>
		          <span class="t-age"></span>
		        </div>
		      </div>
		  
		    </div>
		    <div class="t-buttons">
		      <button class="t-button dislike"></button>
		      <button class="t-button info"></button>
		      <button class="t-button like"></button>
		    </div>
		  </main>
		</div>
	`,
	directives: [FORM_DIRECTIVES]
})
export class DashboardComponent {
	public name = 'john';
	public message = '';

	sayHello() {
		this.message = 'Hello ' + this.name + '!';
	}
}
