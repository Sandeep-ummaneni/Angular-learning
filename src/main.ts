import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';

if (
	typeof window !== 'undefined' &&
	typeof customElements !== 'undefined' &&
	typeof HTMLElement !== 'undefined' &&
	!customElements.get('mission-status-card')
) {
	class MissionStatusCard extends HTMLElement {
		connectedCallback(): void {
			const title = this.getAttribute('data-title') ?? 'Element';
			const text = this.getAttribute('data-text') ?? 'Simple custom element';

			this.innerHTML = `
				<section style="margin:16px 0;padding:14px;border-radius:12px;border:1px solid rgba(91,163,245,.35);background:rgba(8,18,41,.8);color:#dce7ff;">
					<h3 style="margin:0 0 8px;">${title}</h3>
					<p style="margin:0;">${text}</p>
				</section>
			`;
		}
	}

	customElements.define('mission-status-card', MissionStatusCard);
}

bootstrapApplication(App, appConfig)
.catch((err) => console.error(err));