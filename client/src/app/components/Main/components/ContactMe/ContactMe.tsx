import './ContactMe.scss';
import ContactMeSummary from './components/ContactMeSummary/ContactMeSummary';
import ContactMeLinks from './components/ContactMeLinks/ContactMeLinks';
import Footer from './components/Footer/Footer';

export default function ContactMe() {
	return (
		<div id="contact-me">
			<h1 className="title">Contact Me</h1>
			<ContactMeSummary />
			<ContactMeLinks />
			<Footer />
		</div>
	);
}
