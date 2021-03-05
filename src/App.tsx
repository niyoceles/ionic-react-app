import React, { useRef, useState } from 'react';
import {
	IonApp,
	IonButton,
	IonCard,
	IonCardContent,
	IonCol,
	IonContent,
	IonGrid,
	IonHeader,
	IonIcon,
	IonInput,
	IonItem,
	IonLabel,
	IonRow,
	IonTitle,
	IonToolbar,
} from '@ionic/react';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import { refreshOutline, calculatorOutline } from 'ionicons/icons';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => {
	const [results, setResults] = useState<number>();
	const birthYearRef = useRef<HTMLIonInputElement>(null);
	const heightRef = new Date().getFullYear();

	const calculateYearOld = () => {
		const enteredbirthYear = birthYearRef.current!.value;
		console.log(heightRef - 1);

		if (!enteredbirthYear || !heightRef) {
			return;
		}
		const myYearsOld = heightRef - +enteredbirthYear;
		setResults(myYearsOld);
	};

	const resetYearOld = () => {
		birthYearRef.current!.value = '';
	};
	return (
		<IonApp>
			<IonHeader>
				<IonToolbar>
					<IonTitle>Calculate my years</IonTitle>
				</IonToolbar>
			</IonHeader>
			<IonContent>
				<IonGrid>
					<IonRow>
						<IonCol>
							<IonItem>
								<IonLabel position='floating'>Your birth Year</IonLabel>
								<IonInput type='number' ref={birthYearRef}></IonInput>
							</IonItem>
						</IonCol>
					</IonRow>
					<IonRow>
						<IonCol className='ion-text-left'>
							<IonButton onClick={calculateYearOld}>
								<IonIcon slot='start' icon={calculatorOutline} />
								Calculate
							</IonButton>
						</IonCol>
						<IonCol className='ion-text-right'>
							<IonButton onClick={resetYearOld}>
								<IonIcon slot='start' icon={refreshOutline} />
								Reset
							</IonButton>
						</IonCol>
					</IonRow>
					{results && (
						<IonRow>
							<IonCol>
								<IonCard>
									<IonCardContent>
										<h2>{results}</h2>
									</IonCardContent>
								</IonCard>
							</IonCol>
						</IonRow>
					)}
				</IonGrid>
			</IonContent>
		</IonApp>
	);
};

export default App;
