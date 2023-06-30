import { Entity } from '.';
import { Guard } from '../../logic/Guard';
import { Result } from '../../logic/Result';
import { Name } from '../ValueObjects/Name';

interface GuideProps {
  name: Name;
}

export class Guide extends Entity<GuideProps> {
  private constructor(props: GuideProps) {
    super(props);
  }

  get name(): Name {
    return this.props.name;
  }

  public static create(props: GuideProps) {
    const guidePropsResult = Guard.againstNullOrUndefinedBulk([
      { argumentName: 'name', argument: props.name },
    ]);

    if (guidePropsResult.isSuccess) {
      return Result.ok<Guide>(new Guide(props));
    }

    return Result.fail<Guide>(guidePropsResult.error);
  }
}
