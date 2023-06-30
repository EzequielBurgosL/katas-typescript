import { Entity } from '.';
import { Guard } from '../../logic/Guard';
import { Result } from '../../logic/Result';
import { City } from '../ValueObjects/City';
import { Description } from '../ValueObjects/Description';
import { MaxParticipants } from '../ValueObjects/MaxParticipants';
import { Title } from '../ValueObjects/Title';
import { Step } from './Step';

interface TourProps {
  title: Title;
  city: City;
  description: Description;
  date: Date;
  maxParticipants: MaxParticipants;
  steps: Step[];
}

export class Tour extends Entity<TourProps> {
  private constructor(props: TourProps) {
    super(props);
  }

  get title(): Title {
    return this.props.title;
  }

  public static create(props: TourProps) {
    const tourPropsResult = Guard.againstNullOrUndefinedBulk([
      { argumentName: 'title', argument: props.title },
      { argumentName: 'city', argument: props.city },
      { argumentName: 'description', argument: props.description },
      { argumentName: 'date', argument: props.date },
      { argumentName: 'maxParticipants', argument: props.maxParticipants },
      { argumentName: 'steps', argument: props.steps },
    ]);

    if (tourPropsResult.isSuccess) {
      return Result.ok<Tour>(new Tour(props));
    }

    return Result.fail<Tour>(tourPropsResult.error);
  }
}
