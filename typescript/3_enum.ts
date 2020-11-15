enum Membership {
    Simple,
    Standart,
    Premium
}

const memberShip = Membership.Standart
// return 1

const membershipRevers = Membership[2]
// return 'Premium'

enum SocialMedia {
    VK = 'VK',
    FACEBOOK = 'FACEBOOK',
    INSTAGRAM = 'INSTAGRAM'
}

const socialMedia = SocialMedia.INSTAGRAM
// return 'INSTAGRAM'
