//  Título, la descripción y la localización donde se produce
import { Entity } from '.';
import { Guard } from '../../logic/Guard';
import { Result } from '../../logic/Result';
import { Description } from '../ValueObjects/Description';
import { Location } from '../ValueObjects/Location';
import { Title } from '../ValueObjects/Title';

interface StepProps {
  title: Title;
  description: Description;
  location: Location;
}

export class Step extends Entity<StepProps> {
  private constructor(props: StepProps) {
    super(props);
  }

  get title(): Title {
    return this.props.title;
  }

  public static create(props: StepProps) {
    const stepPropsResult = Guard.againstNullOrUndefinedBulk([
      { argumentName: 'title', argument: props.title },
      { argumentName: 'description', argument: props.description },
      { argumentName: 'location', argument: props.location },
    ]);

    if (stepPropsResult.isSuccess) {
      return Result.ok<Step>(new Step(props));
    }

    return Result.fail<Step>(stepPropsResult.error);
  }
}
