import { Entity } from '.';
import { Guard } from '../../logic/Guard';
import { Result } from '../../logic/Result';
import { Name } from '../ValueObjects/Name';
import { ParticipantNumber } from '../ValueObjects/ParticipantNumber';
import { PhoneNumber } from '../ValueObjects/PhoneNumber';

interface ClientProps {
  name: Name;
  phoneNumber: PhoneNumber;
  participantNumber: ParticipantNumber;
}

export class Client extends Entity<ClientProps> {
  private constructor(props: ClientProps) {
    super(props);
  }

  get name(): Name {
    return this.props.name;
  }

  public static create(props: ClientProps): Result<Client> {
    const clientPropsResult = Guard.againstNullOrUndefinedBulk([
      { argumentName: 'name', argument: props.name },
      { argumentName: 'phoneNumber', argument: props.phoneNumber },
      { argumentName: 'participantNumber', argument: props.participantNumber },
    ]);

    if (clientPropsResult.isSuccess) {
      return Result.ok<Client>(new Client(props));
    }

    return Result.fail<Client>(clientPropsResult.error);
  }
}
