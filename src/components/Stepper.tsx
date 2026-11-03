import '../styles/stepper.css'

type StepperProps = {
	value: number;
	onDec: () => void;
	onInc: () => void;
	decLabel: string;
	incLabel: string;
	solid?: boolean;
	btnWidth?: number;
	btnFont?: number;
	valueMin?: number;
	valueFont?: number;
}

export default function Stepper({
	value,
	onDec,
	onInc,
	decLabel,
	incLabel,
}: StepperProps) {
	return (
		<div class="stepper">
			<button
				onClick={onDec}
				aria-label={decLabel}
				class="decrement-button"
			>
				−
			</button>
			<span class="value-display">
				{value}
			</span>
			<button
				onClick={onInc}
				aria-label={incLabel}
				class="increment-button"
			>
				+
			</button>
		</div>
	);
}
